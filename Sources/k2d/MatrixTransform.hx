package k2d;

import k2d.math.Matrix;

class MatrixTransform {
    public var local:Matrix = Matrix.identity();
    public var world:Matrix = Matrix.identity();

    private var _cx:Float = 1;
	private var _sx:Float = 0;
	private var _cy:Float = 0;
	private var _sy:Float = 1;

	private var _aW:Float = 0;
	private var _aH:Float = 0;
	private var _pW:Float = 0;
	private var _pH:Float = 0;

	private var _scX:Float = 0;
	private var _scY:Float = 0;
	private var _anX:Float = 0;
	private var _anY:Float = 0;
	private var _piX:Float = 0;
	private var _piY:Float = 0;

	private var _midSizeX:Float = 0;
	private var _midSizeY:Float = 0;
    
    public function new(){}

    public inline function updateSkew(actor:Actor) : Void {
		_cx = Math.cos(actor.rotation + actor.skew.y);
		_sx = Math.sin(actor.rotation + actor.skew.y);
		_cy = -Math.sin(actor.rotation - actor.skew.x);
		_sy = Math.cos(actor.rotation - actor.skew.x);
	}

    public inline function updateLocal(actor:Actor) : Void {
		_scX = actor.scale.x * (actor.flip.x ? -1 : 1);
		_scY = actor.scale.y * (actor.flip.y ? -1 : 1);
		_anX = actor.flip.x ? 1-actor.anchor.x : actor.anchor.x;
		_anY = actor.flip.y ? 1-actor.anchor.y : actor.anchor.y;
		_piX = actor.flip.x ? 1-actor.pivot.x : actor.pivot.x;
		_piY = actor.flip.y ? 1-actor.pivot.y : actor.pivot.y;
		_midSizeX = actor.size.x*0.5;
		_midSizeY = actor.size.y*0.5;

		local._00 = _cx * _scX;
		local._01 = _sx * _scX;
		local._10 = _cy * _scY;
		local._11 = _sy * _scY;

		_aW = _anX * actor.size.x - _midSizeX;
		_aH = _anY * actor.size.y - _midSizeY;
		_pW = _piX * actor.size.x - _midSizeX;
		_pH = _piY * actor.size.y - _midSizeY;

		local._20 = actor.position.x - _aW * _scX + _pW * _scX;
		local._21 = actor.position.y - _aH * _scY + _pH * _scY;
		
		if(_pW != 0 || _pH != 0){
			local._20 -= _pW * local._00 + _pH * local._10;
			local._21 -= _pW * local._01 + _pH * local._11;
		}
	}

	public inline function updateWorld(parentMatrix:Matrix) : Void {
		var pm = parentMatrix;
		world._00 = (local._00 * pm._00) + (local._01 * pm._10);
		world._01 = (local._00 * pm._01) + (local._01 * pm._11);
		world._10 = (local._10 * pm._00) + (local._11 * pm._10);
		world._11 = (local._10 * pm._01) + (local._11 * pm._11);

		world._20 = (local._20 * pm._00) + (local._21 * pm._10) + pm._20;
		world._21 = (local._20 * pm._01) + (local._21 * pm._11) + pm._21;
	}

    @:extern public inline function update(actor:Actor, parentMatrix:Matrix) : Void {
		updateLocal(actor);
		updateWorld(parentMatrix);
	}
}