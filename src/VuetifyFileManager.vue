<template>
    <v-layout pa-0 ma-0 fill-height>
        <v-flex xs12 sm4 md3 xl2>
            <v-layout column fill-height pa-3 class="grey lighten-4" style="position: relative">
                <folders :root-name="rootName"
                         :folders="folders"
                         @folderSelected="folderSelected"
                         :deleteFolder="deleteFolder"
                         :hasDeleteOption="hasDeleteFolderOption"/>
                <folder-create :createFolder="createFolder"
                               :folders="folders"
                               v-on="$listeners"
                               @folderCreated="callGetFolders"/>
            </v-layout>
        </v-flex>
        <v-divider vertical/>
        <v-flex xs12 sm8 md9 xl10>
            <v-layout column fill-height pa-3>
                <folder-view :files="files"
                             v-on="$listeners"
                             :deleteImage="deleteImage"
                             :hasDeleteOption="hasDeleteImageOption"></folder-view>
            </v-layout>
        </v-flex>
    </v-layout>
</template>

<script>
import FolderCreate from './FileManager/FolderCreate.vue';
import Folders from './FileManager/Folders.vue';
import FolderView from './FileManager/FolderView.vue';

export default {
    name: 'vuetify-file-manager',
    components: {FolderCreate, FolderView, Folders},
    data() {
        return {
            files: [],
            folders: [],
        };
    },
    props: {
        getFolders: {
            required: true,
            type: Function,
        },
        /**
         * {
         *     id: 0,
         *     name: '',
         *     mime_type: '',
         *     download_path: '',
         *     preview_path: ''
         * }
         */
        getFolderContent: {
            required: true,
            type: Function,
        },
        rootName: {
            required: false,
            type: String,
            default: 'Website',
        },
        createFolder: {
            required: true,
            type: Function,
        },
        deleteFolder: {
            required: false,
            type: Function,
        },
        deleteImage: {
            required: false,
            type: Function,
        },
    },
    computed: {
        selectedFolder() {
            return this.folders ? this.folders[0].id : null;
        },
        hasDeleteFolderOption() {
            return typeof this.deleteFolder === 'function';
        },
        hasDeleteImageOption() {
            return typeof this.deleteImage === 'function';
        },
    },
    methods: {
        folderSelected(selectedFolderId) {
            this.getFolderContent(selectedFolderId).then((content) => {
                this.files = content;
            });
        },
        callGetFolders() {
            this.getFolders().then(folders => {
                this.folders = folders;
                this.folderSelected(folders[0].id);
            });
        },
        reloadFiles() {
            this.folderSelected(this.selectedFolder);
        },
        reloadDirectory() {
            this.callGetFolders();
        },
    },
    created() {
        this.callGetFolders();
    },
};
</script>

<style scoped>
</style>
