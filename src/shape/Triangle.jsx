'use strict';

import FabricObject from '../base/Object.jsx';
import {fabric} from 'fabric';

export default class Triangle extends FabricObject {
	constructor(props, context) {
		super(props, context);
		this.state = {
			object: null,
		};

		this.draw = this.draw.bind(this);

		this.toSVG = (reviver) => this.state.object &&
			this.state.object.toSVG(reviver);

		this.complexity = () => 1;
	}

	draw(cb) {
		let object;
		if (this.props.element instanceof Object) {
			object = fabric.Triangle.fromElement(this.props.element, this.props);
		} else if (this.props.object instanceof Object) {
			object = fabric.Triangle.fromObject(this.props.object);
		} else {
			object = new fabric.Triangle(this.props);
		}
		super.draw(object, cb);
	}

}

Triangle.fromObject = (object) => fabric.Triangle.fromObject(object);

Triangle.propTypes = Object.assign({}, FabricObject.propTypes);
Triangle.defaultProps = Object.assign({}, FabricObject.defaultProps, {
	type: 'triangle',
});
