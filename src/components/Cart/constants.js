export const formConstants = {
    tel: {
        value: '',
        label: 'Tel',
        type: 'tel',
        valid: false,
        touched: false,
        validation: {
            required: true,
            minLength: 9
        }
    },
    email: {
        value: '',
        label: 'Email',
        type: 'email',
        valid: false,
        touched: false,
        validation: {
            required: true,
            email: true
        }
    },
    name: {
        value: '',
        label: 'Name',
        type: 'name',
        valid: false,
        touched: false,
        validation: {
            required: true,
            minLength: 1
        }
    },

    city: {
        value: '',
        label: 'City',
        type: 'city',
        valid: false,
        touched: false,
        validation: {
            required: true,
            minLength: 1
        }
    },
    address: {
        value: '',
        label: 'Address',
        type: 'address',
        valid: false,
        touched: false,
        validation: {
            required: true,
            minLength: 1
        }
    }
}