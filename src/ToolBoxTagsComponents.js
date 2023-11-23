import React, { Component } from 'react';

export const Mutation = (p) => {
    const { children, ...props } = p;
    props.is = "blockly";
    return React.createElement("mutation", props, children);
}

export const Block = (p) => {
    const { children, ...props } = p;
    props.is = "blockly";
    return React.createElement("block", props, children);
};

export const Category = (p) => {
    const { children, ...props } = p;
    props.is = "blockly";
    return React.createElement("category", props, children);
};

export const Field = (p) => {
    const { children, ...props } = p;
    props.is = "blockly";
    return React.createElement("field", props, children);
};

export const Value = (p) => {
    const { children, ...props } = p;
    props.is = "blockly";
    return React.createElement("value", props, children);
};

export const Shadow = (p) => {
    const { children, ...props } = p;
    props.is = "blockly";
    return React.createElement("shadow", props, children);
};

export const Sep = (p) => {
    const { children, ...props } = p;
    props.is = "blockly";
    return React.createElement("sep", props, children);
};


class XmlComponent extends Component {
    render() {
        const injectedProps = Object.assign(
            {},
            this.props,
            {
                ref: (x) => this.props.onRef(x)
            });
        delete injectedProps.onRef;
        injectedProps.is = "blockly";
        return React.createElement('xml', injectedProps);
    }
};

export const Xml = XmlComponent;

export default {
    Mutation,
    Block,
    Xml,
    Category,
    Field,
    Value,
    Shadow,
    Sep,
};
