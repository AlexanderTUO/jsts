import Assert from '../util/Assert';
export default class GraphComponent {
	constructor(...args) {
		this.label = null;
		this._isInResult = false;
		this._isCovered = false;
		this._isCoveredSet = false;
		this._isVisited = false;
		const overloaded = (...args) => {
			if (args.length === 0) {
				let [] = args;
			} else if (args.length === 1) {
				let [label] = args;
				this.label = label;
			}
		};
		return overloaded.apply(this, args);
	}
	get interfaces_() {
		return [];
	}
	setVisited(isVisited) {
		this._isVisited = isVisited;
	}
	setInResult(isInResult) {
		this._isInResult = isInResult;
	}
	isCovered() {
		return this._isCovered;
	}
	isCoveredSet() {
		return this._isCoveredSet;
	}
	setLabel(label) {
		this.label = label;
	}
	getLabel() {
		return this.label;
	}
	setCovered(isCovered) {
		this._isCovered = isCovered;
		this._isCoveredSet = true;
	}
	updateIM(im) {
		Assert.isTrue(this.label.getGeometryCount() >= 2, "found partial label");
		this.computeIM(im);
	}
	isInResult() {
		return this._isInResult;
	}
	isVisited() {
		return this._isVisited;
	}
	getClass() {
		return GraphComponent;
	}
}

