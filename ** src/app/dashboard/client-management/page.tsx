import Head from 'next/head';
import { useState } from 'react';
import {
  Badge,
  Button,
  Card,
  Grid,
  Input,
  Modal,
  Text,
} from '@src/components';
import { useClient } from '@src/app/hooks';
import { Client } from '@src/lib/data';

const ClientManagementPage = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedClient, setSelectedClient] = useState<Client | null>(null);

  const client = useClient();

  const handleSelectedClient = (client: Client) => {
    setSelectedClient(client);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedClient(null);
  };

  return (
    <>
      <Head>
        <title>Client Management</title>
      </Head>
      <Grid.Container gap={4}>
        <Grid>
          <Card>
            <Grid>
              <Grid.Container gap={2} direction="column">
                <Grid>
                  <Text weight="bold" size="xl">
                    Manage Clients
                  </Text>
                </Grid>
                <Grid>
                  <Input
                    label="Search by Name"
                    placeholder="Enter client name"
                    size="lg"
                    variant="outline"
                  />
                </Grid>
                <Grid>
                  <Button variant="primary" size="lg" fullWidth>
                    View All Clients
                  </Button>
                </Grid>
              </Grid.Container>
            </Grid>
          </Card>
        </Grid>
      </Grid.Container>
      <Modal
        open={showModal}
        onClose={handleCloseModal}
        title="View Client Details"
        size="lg"
      >
        <Grid.Item>
          <Card>
            <Grid>
              <Grid.Container gap={2} direction="column">
                <Grid>
                  <Text weight="bold" size="xl">
                    {selectedClient?.name}
                  </Text>
                </Grid>
                <Grid>
                  <Text>
                    {selectedClient?.email}
                  </Text>
                </Grid>
                <Grid>
                  <Badge color="success">
                    {selectedClient?.status}
                  </Badge>
                </Grid>
              </Grid.Container>
            </Grid>
          </Card>
        </Grid.Item>
      </Modal>
      <Grid.Container gap={4}>
        {Client.map((client, index) => (
          <Grid key={index}>
            <Card
              onClick={() => handleSelectedClient(client)}
            >
              <Grid.Container gap={2}>
                <Grid.Item>
                  <Text weight="bold" size="xl">
                    {client.name}
                  </Text>
                </Grid.Item>
                <Grid.Item>
                  <Badge color="success">
                    {client.status}
                  </Badge>
                </Grid.Item>
              </Grid.Container>
            </Card>
          </Grid>
        ))}
      </Grid.Container>
    </>
  );
};

export default ClientManagementPage;