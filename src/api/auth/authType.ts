// src/api/devices/deviceTypes.ts
export interface Auth {
    id: string;
    name: string;
    status: 'active' | 'inactive';
}
