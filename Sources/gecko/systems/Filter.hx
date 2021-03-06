package gecko.systems;

import gecko.components.Component;

private typedef MatchQuery = {
    is:Class<Component>,
    equal:Class<Component>,
    base:Array<Class<Component>>,
    baseAll:Array<Class<Component>>,
    any:Array<Class<Component>>,
    all:Array<Class<Component>>,
    not:Array<Class<Component>>
};

class Filter {
    private var _query:MatchQuery;

    public function new(){
        clear();
    }

    public function clear() : Filter {
        _query = {
            is:null,
            equal:null,
            base: [], //any
            baseAll: [],
            any: [],
            all: [],
            not: [] //todo not filter
        };
        return this;
    }

    public function is(cls:Class<Component>) : Filter {
        _query.is = cls;
        return this;
    }

    public function equal(cls:Class<Component>) : Filter {
        _query.equal = cls;
        return this;
    }

    public function base(clss:Array<Class<Component>>) : Filter {
        _query.base = clss;
        return this;
    }

    public function baseAll(clss:Array<Class<Component>>) : Filter {
        _query.base = clss;
        return this;
    }

    public function any(clss:Array<Class<Component>>) : Filter {
        _query.any = clss;
        return this;
    }

    public function addAny(cls:Class<Component>) : Filter {
        if(_query.any.indexOf(cls) == -1){
            _query.any.push(cls);
        }
        return this;
    }

    public function all(clss:Array<Class<Component>>) : Filter {
        _query.all = clss;
        return this;
    }

    public function addAll(cls:Class<Component>) : Filter {
        if(_query.all.indexOf(cls) == -1){
            _query.all.push(cls);
        }
        return this;
    }

    public function addBase(cls:Class<Component>) : Filter {
        if(_query.base.indexOf(cls) == -1){
            _query.base.push(cls);
        }
        return this;
    }

    /*public function not(cls:Class<Component>) : Filter {
        //todo
        return this;
    }*/

    private inline function _isEmptyQuery() : Bool {
        return _query.is == null && _query.equal == null && _query.any.length == 0 && _query.all.length == 0 && _query.base.length == 0;
    }

    public function testEntity(entity:Entity) : Bool {
        if(_isEmptyQuery()){
            return false;
        }

        var components = entity.getAllComponents();
        if(components.length != 0){
            if(_query.is != null){
                var valid = false;
                for(c in components){
                    if(Std.is(c, _query.is)){
                        valid = true;
                        break;
                    }
                }

                if(!valid)return false;
            }

            if(_query.equal != null){
                if(!entity.hasComponent(_query.equal))return false;
            }

            if(_query.any.length != 0){
                var valid = false;
                for(qc in _query.any){
                    if(entity.hasComponent(qc)){
                        valid = true;
                        break;
                    }
                }

                if(!valid)return false;
            }

            if(_query.all.length != 0){
                var valid = true;
                for(qc in _query.all){
                    if(!entity.hasComponent(qc)){
                        valid = false;
                        break;
                    }
                }

                if(!valid)return false;
            }

            if(_query.base.length != 0){
                var valid = false;
                for(qc in _query.base){
                    if(entity.hasComponentOfType(qc)){
                        valid = true;
                        break;
                    }
                }

                if(!valid)return false;
            }

            if(_query.baseAll.length != 0){
                var valid = true;
                for(qc in _query.base){
                    if(!entity.hasComponentOfType(qc)){
                        valid = false;
                        break;
                    }
                }

                if(!valid)return false;
            }

            return true;
        }

        return false;
    }

    /*public function getValidComponents(entity:Entity) : Array<Class<Component>> {
        return [];
    }*/
}