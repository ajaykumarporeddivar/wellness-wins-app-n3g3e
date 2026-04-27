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
import { Program } from '@src/lib/data';

const ProgramCreationPage = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedProgram, setSelectedProgram] = useState<Program | null>(null);

  const client = useClient();

  const handleSelectedProgram = (program: Program) => {
    setSelectedProgram(program);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedProgram(null);
  };

  return (
    <>
      <Head>
        <title>Program Creation</title>
      </Head>
      <Grid.Container gap={4}>
        <Grid>
          <Card>
            <Grid>
              <Grid.Container gap={2} direction="column">
                <Grid>
                  <Text weight="bold" size="xl">
                    Create a New Program
                  </Text>
                </Grid>
                <Grid>
                  <Input
                    label="Program Name"
                    placeholder="Enter program name"
                    size="lg"
                    variant="outline"
                  />
                </Grid>
                <Grid>
                  <Input
                    label="Program Description"
                    placeholder="Enter program description"
                    rows={4}
                    size="lg"
                    variant="outline"
                  />
                </Grid>
                <Grid>
                  <Button variant="primary" size="lg" fullWidth>
                    Create Program
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
        title="View Program Details"
        size="lg"
      >
        <Grid.Item>
          <Card>
            <Grid>
              <Grid.Container gap={2} direction="column">
                <Grid>
                  <Text weight="bold" size="xl">
                    {selectedProgram?.name}
                  </Text>
                </Grid>
                <Grid>
                  <Text>
                    {selectedProgram?.description}
                  </Text>
                </Grid>
                <Grid>
                  <Badge color="success">
                    {selectedProgram?.status}
                  </Badge>
                </Grid>
              </Grid.Container>
            </Grid>
          </Card>
        </Grid.Item>
      </Modal>
      <Grid.Container gap={4}>
        {Program.map((program, index) => (
          <Grid key={index}>
            <Card
              onClick={() => handleSelectedProgram(program)}
            >
              <Grid.Container gap={2}>
                <Grid.Item>
                  <Text weight="bold" size="xl">
                    {program.name}
                  </Text>
                </Grid.Item>
                <Grid.Item>
                  <Badge color="success">
                    {program.status}
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

export default ProgramCreationPage;