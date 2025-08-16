
export const CreateProfileContent = [
    { name: 'profile_name', type: 'text', placeholder: 'Name', requireField: true, readOnlyField: false, d: "M185-80q-16.33 0-29.17-12.83Q143-105.67 143-122v-105q0-90 56-159t144-88q-40 28-62 70.5T259-312v190q0 11 3 22t10 20h-87Zm147 0q-17 0-29.5-12.5T290-122v-190q0-70 49.5-119T459-480h189q70 0 119 49t49 119v64q0 70-49 119T648-80H332Zm148-484q-66 0-112-46t-46-112q0-66 46-112t112-46q66 0 112 46t46 112q0 66-46 112t-112 46Z" },
    { name: 'profile_address', type: 'text', placeholder: 'Address', requireField: true, readOnlyField: false, d: "M446.67-406.67h66.66v-120h120v-66.66h-120v-120h-66.66v120h-120v66.66h120v120ZM480-168q129.33-118 191.33-214.17 62-96.16 62-169.83 0-114.86-73.36-188.1-73.36-73.23-179.97-73.23T300.03-740.1q-73.36 73.24-73.36 188.1 0 73.67 63 169.83Q352.67-286 480-168Zm0 88Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Zm0-480Z" },
];

// export const DummyData = [
//     { profile_name: "Hotel Sapphire Palace", profile_address: "22 MG Road, Connaught Place, New Delhi, India", active: 0, profile_token: "0987654321", token: "ABCDEFGHIJKLMNOPQRSTUVWXYZ", to: `/${token}/dashboard/${profile_name}/${profile_token}`, },
//     { profile_name: "Grand Orchid Residency", profile_address: "145 Marine Drive, Churchgate, Mumbai, India", active: 0, profile_token: "0987654321", token: "ABCDEFGHIJKLMNOPQRSTUVWXYZ", to: `/${token}/dashboard/${profile_name}/${profile_token}`, },
//     { profile_name: "The Royal Fern Suites", profile_address: "78 Anna Salai, T. Nagar, Chennai, India", active: 0, profile_token: "ABCDEFGHIJKLMNOPQRSTUVWXYZ", token: "0987654321", to: `/${token}/dashboard/${profile_name}/${profile_token}`, },
//     { profile_name: "Palmview Heritage Inn", profile_address: "56 Residency Road, Ashok Nagar, Bengaluru, India", active: 0, profile_token: "ABCDEFGHIJKLMNOPQRSTUVWXYZ", token: "0987654321", to: `/${token}/dashboard/${profile_name}/${profile_token}`, },
// ];

export const DummyData = [
    {
        profile_name: "Hotel Sapphire Palace",
        profile_address: "22 MG Road, Connaught Place, New Delhi, India",
        active: 0,
        profile_token: "0987654321",
        token: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    },
    {
        profile_name: "Grand Orchid Residency",
        profile_address: "145 Marine Drive, Churchgate, Mumbai, India",
        active: 0,
        profile_token: "0987654321",
        token: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    },
    {
        profile_name: "The Royal Fern Suites",
        profile_address: "78 Anna Salai, T. Nagar, Chennai, India",
        active: 0,
        profile_token: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
        token: "0987654321",
    },
    {
        profile_name: "Palmview Heritage Inn",
        profile_address: "56 Residency Road, Ashok Nagar, Bengaluru, India",
        active: 0,
        profile_token: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
        token: "0987654321",
    },
].map((item) => ({
    ...item,
    to: `/${item.token}/dashboard/${encodeURIComponent(
        item.profile_name
    )}/${item.profile_token}`,
}));


export default { CreateProfileContent, DummyData };