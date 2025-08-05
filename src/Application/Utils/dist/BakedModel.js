"use strict";
exports.__esModule = true;
var THREE = require("three");
var BakedModel = /** @class */ (function () {
    function BakedModel(model, texture, scale) {
        var _this = this;
        this.model = model;
        this.texture = texture;
        this.texture.flipY = false;
        this.texture.encoding = THREE.sRGBEncoding;
        this.material = new THREE.MeshBasicMaterial({
            map: this.texture
        });
        this.model.scene.traverse(function (child) {
            if (child instanceof THREE.Mesh) {
                if (scale)
                    child.scale.set(scale, scale, scale);
                child.material.map = _this.texture;
                child.material = _this.material;
            }
        });
        return this;
    }
    BakedModel.prototype.getModel = function () {
        return this.model.scene;
    };
    return BakedModel;
}());
exports["default"] = BakedModel;
