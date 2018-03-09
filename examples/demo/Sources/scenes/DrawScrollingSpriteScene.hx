package scenes;

import exp.Screen;
import exp.Float32;
import exp.components.draw.ScrollingSpriteComponent;
import exp.components.core.TransformComponent;
import exp.Entity;

class DrawScrollingSpriteScene extends CustomScene {
    override public function init(closeButton:Bool = false) {

        //background
        var scroll1 = _createScrollingSprite("images/opengameart/mountain.png", Screen.centerX, Screen.centerY, Screen.width, Screen.height);
        scroll1.speed.x = 20;

        var scroll2 = _createScrollingSprite("images/opengameart/carbon_fiber.png", 150, Screen.centerY, 200, 500);
        scroll2.speed.y = -30;

        var scroll3 = _createScrollingSprite("images/opengameart/carbon_fiber.png", 550, Screen.centerY, 400, 300);
        scroll3.speed.set(20, 20);
        scroll3.scale.set(0.5);

        super.init(closeButton);
    }

    private function _createScrollingSprite(sprite:String, x:Float32, y:Float32, width:Float32, height:Float32) : ScrollingSpriteComponent {
        var e = Entity.create();
        e.addComponent(TransformComponent.create(x, y));

        addEntity(e);

        return e.addComponent(ScrollingSpriteComponent.create(sprite, width, height));
    }
}