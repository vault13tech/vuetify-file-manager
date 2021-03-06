<template>
    <v-hover>
        <v-flex xs4 md3 lg2 pa-3
                class="text-xs-center file"
                style="position: relative"
                slot-scope="{ hover }">
            <v-badge
                v-model="hover"
                color="transparant"
                transition="scale-transition"
                class="right px-2"
                style="width: 100%"
            >
                <template v-slot:badge>
                    <v-speed-dial
                        v-model="fab" openOnHover direction="bottom" class="mr-4">
                        <template v-slot:activator>
                            <v-btn v-model="fab" color="primary darken-2" dark fab small>
                                <v-icon>fa-ellipsis-v</v-icon>
                                <v-icon>fa-times</v-icon>
                            </v-btn>
                        </template>
                        <v-btn fab dark small color="grey" @click="$emit('download', file)" x-small>
                            <v-icon>fa-download</v-icon>
                        </v-btn>
                        <v-btn fab
                               dark
                               small
                               color="red"
                               @click="$emit('showDeleteDialog', file)"
                               x-small
                               v-if="isRemovable">
                            <v-icon @click="">fa-trash</v-icon>
                        </v-btn>
                    </v-speed-dial>
                </template>
                <v-img
                    v-if="isImage"
                    :height="72"
                    :src="`${file.preview_path}?height=80`"
                    class="mt-4"
                    @click="$emit('select', file)"
                />
                <v-icon
                    v-else
                    :size="72"
                    color="gray"
                    class="mt-4"
                    @click="$emit('select', file)">
                    fal {{icon}}
                </v-icon>
                <v-tooltip right>
                    <template v-slot:activator="{ on }">
                        <div v-on="on" class="subheading text-truncate">{{file.name}}</div>
                    </template>
                    {{file.name}}
                </v-tooltip>
            </v-badge>
        </v-flex>
    </v-hover>
</template>

<script>
import ContextMenu from './ContextMenu.vue';

export default {
    name: 'FileView',
    components: {ContextMenu},
    props: {
        file: {
            required: true,
            type: Object,
        },
        isRemovable: {
            required: false,
            type: Boolean,
            default: false,
        },
    },
    data: () => {
        return {
            fab: false,
        };
    },
    computed: {
        isImage() {
            return this.file.mime_type && ['image/png', 'image/jpeg', 'image/jpg'].includes(this.file.mime_type);
        },
        icon() {
            let mimeType = this.file.mime_type;
            // List of official MIME Types: http://www.iana.org/assignments/media-types/media-types.xhtml
            let icon_classes = {
                // Media
                image: 'fa-file-image',
                audio: 'fa-file-audio',
                video: 'fa-file-video',

                // Documents
                'application/pdf': 'fa-file-pdf',
                'application/msword': 'fa-file-word',
                'application/vnd.ms-word': 'fa-file-word',
                'application/vnd.oasis.opendocument.text': 'fa-file-word',
                'application/vnd.openxmlformatsfficedocument.wordprocessingml': 'fa-file-word',
                'application/vnd.ms-excel': 'fa-file-excel',
                'application/vnd.openxmlformatsfficedocument.spreadsheetml': 'fa-file-excel',
                'application/vnd.oasis.opendocument.spreadsheet': 'fa-file-excel',
                'application/vnd.ms-powerpoint': 'fa-file-powerpoint',
                'application/vnd.openxmlformatsfficedocument.presentationml': 'fa-file-powerpoint',
                'application/vnd.oasis.opendocument.presentation': 'fa-file-powerpoint',
                'text/plain': 'fa-file-alt',
                'text/html': 'fa-file-code',
                'application/json': 'fa-file-code',

                // Archives
                'application/gzip': 'fa-file-archive',
                'application/zip': 'fa-file-archive',
            };

            for (let key in icon_classes) {
                if (icon_classes.hasOwnProperty(key)) {
                    if (mimeType.search(key) === 0) {
                        return icon_classes[key];
                    }
                } else {
                    return 'fa-file';
                }
            }
            return 'fa-file';
        },
    },
};
</script>

<style scoped>
.file
{
    height: 105px;
}

.v-speed-dial
{
    height: 30px;
}
</style>

<style>
.pos-relative
{
    position: relative;
}
</style>
