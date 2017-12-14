'use strict';

import PropTypes from 'prop-types';
import FabricObject from '../base/Object.jsx';
import {fabric} from 'fabric';

export default class Ellipse extends FabricObject {
	constructor(props, context) {
		super(props, context);
		this.state = {
			object: null,
		};

		this.draw = this.draw.bind(this);

		this.getRx = () => this.state.object &&
			this.state.object.getRx();
		this.getRy = () => this.state.object &&
			this.state.object.getRy();
		this.toObject = (propertiesToInclude) => this.state.object &&
			this.state.object.toObject(propertiesToInclude);
		this.toSVG = (reviver) => this.state.object &&
			this.state.object.toObject(reviver);
		this.renderf = () => this.state.object &&
				this.state.object.render();
		this.complexity = () => 1;
	}

	draw(cb) {
		let object;
		if (this.props.element instanceof Object) {
			object = fabric.Ellipse.fromElement(this.props.element, this.props);
		} else if (this.props.object instanceof Object) {
			object = fabric.Ellipse.fromObject(this.props.object);
		} else {
			object = new fabric.Ellipse(this.props);
		}
		super.draw(object, cb);
	}

}

Ellipse.fromElement = (element, options) => fabric.Ellipse.fromElement(element, options);
Ellipse.fromObject = (object) => fabric.Ellipse.fromObject(object);
Ellipse.attribute = fabric.Ellipse.ATTRIBUTE_NAMES;

Ellipse.propTypes = Object.assign({}, FabricObject.propTypes, {
	rx: PropTypes.number,
	ry: PropTypes.number,
});

Ellipse.defaultProps = Object.assign({}, FabricObject.defaultProps, {
	rx: 0,
	ry: 0,
	type: 'ellipse',
});