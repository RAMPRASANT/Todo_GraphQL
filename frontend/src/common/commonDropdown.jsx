import React from "react";
import Form from 'react-bootstrap/Form';

// common component for all the dropdowns.
// based on the props it can handle all the data rendering and events of dropdown fields
const CommonDropdown = (props) => {
    const { label, options, options_config, events, hint } = props;
    const defaultOption = options_config?.firstOption || '';
    return (
        <Form.Group className="mb-3">
            <Form.Label>{label}</Form.Label>
            <Form.Select
                aria-label="Default select"
                data-testid={`${label}Field`}
                onChange={(e) => events.handleChange(e, label)}
            >
                <option>{defaultOption}</option>
                {options && options.map((item, i) =>
                    <option value={item}>{item}</option>
                )}
            </Form.Select>
            <Form.Text className="text-muted">
                {hint}
            </Form.Text>
        </Form.Group>
    )
}

export default CommonDropdown;
