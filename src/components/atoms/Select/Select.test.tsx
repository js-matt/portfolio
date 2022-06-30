import { Formik } from 'formik';
import { render } from '@testing-library/react';
import { Select } from '../Select';

const mockField = {
	value: '',
	checked: false,
	onChange: jest.fn(),
	onBlur: jest.fn(),
	multiple: undefined,
	name: 'password',
};
const mockMeta = {
	touched: false,
	error: '',
	initialError: '',
	initialTouched: false,
	initialValue: '',
	value: '',
};

jest.mock('formik', () => ({
	...jest.requireActual('formik'),
	useField: jest.fn(() => {
		return [mockField, mockMeta];
	}),
}));

describe('Select', () => {
	it('renders correctly', () => {
		const { container } = render(
			<Formik
				initialValues={{
					firstName: '',
				}}
				onSubmit={jest.fn()}
				validate={(values) => {
					const errors = {
						firstName: '',
					};

					if (!values?.firstName) {
						errors.firstName = 'Required.';
					}

					return errors;
				}}
			>
				<Select
					label="Some select"
					id="some-select"
					options={['1', '2', '3']}
				/>
			</Formik>
		);
		expect(container).toMatchSnapshot();
	});
});
