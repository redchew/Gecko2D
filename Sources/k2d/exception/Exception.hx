package k2d.exception;

import haxe.CallStack;

class Exception {
	public var message: String;
	public var stackTrace: Array<StackItem>;

	public function new(message: String) {
		this.message = message;
		this.stackTrace = CallStack.callStack();
	}

	public function toString() : String {
		return this.message + '\n' + CallStack.toString(this.stackTrace);
	}
}