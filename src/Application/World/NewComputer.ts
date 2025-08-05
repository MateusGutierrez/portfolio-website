// import * as THREE from 'three';
// import Application from '../Application';
// import Resources from '../Utils/Resources';
// import BakedModel from '../Utils/BakedModel';

// export default class NewComputerSetup {
//     application: Application;
//     scene: THREE.Scene;
//     resources: Resources;
//     model: THREE.Group;
//     bakedModel: BakedModel;

//     constructor() {
//         this.application = new Application();
//         this.scene = this.application.scene;
//         this.resources = this.application.resources;

//         this.bakeModel();
//         this.setModel();
//     }

//     bakeModel() {
//         this.bakedModel = new BakedModel(
//             this.resources.items.gltfModel.newComputerSetupModel,
//             this.resources.items.texture = this.resources.loaders.gltfLoader.,
//             900
//         );
//     }

//     setModel() {
//         this.scene.add(this.bakedModel.getModel());
//     }
// }
