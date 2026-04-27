export interface IProgram {
  id: string;
  title: string;
  description: string;
  clientName: string;
  programStartDate: string;
  programEndDate: string;
  notes: string;
}

export const programs: IProgram[] = [
  {
    id: '123e4567-e89b-12d3-a456-426655440000',
    title: 'Spring Fitness',
    description: 'A 12-week program to help clients get in shape for summer.',
    clientName: 'John Doe',
    programStartDate: '2023-02-01',
    programEndDate: '2023-05-01',
    notes: 'Client wants to focus on weight loss.',
  },
  {
    id: '123e4567-e89b-12d3-a456-426655440001',
    title: 'Mindfulness Challenge',
    description: 'A 4-week program to help clients reduce stress.',
    clientName: 'Jane Smith',
    programStartDate: '2023-03-01',
    programEndDate: '2023-03-28',
    notes: 'Client wants to focus on meditation.',
  },
];

export interface IClient {
  id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
}

export const clients: IClient[] = [
  {
    id: '123e4567-e89b-12d3-a456-426655440000',
    name: 'John Doe',
    email: 'johndoe@example.com',
    phone: '123-456-7890',
    address: '123 Main St',
  },
  {
    id: '123e4567-e89b-12d3-a456-426655440001',
    name: 'Jane Smith',
    email: 'janesmith@example.com',
    phone: '987-654-3210',
    address: '456 Elm St',
  },
];