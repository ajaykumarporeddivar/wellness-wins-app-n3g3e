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
import { Content } from '@src/lib/data';

const ContentLibraryPage = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedContent, setSelectedContent] = useState<Content | null>(null);

  const client = useClient();

  const handleSelectedContent = (content: Content) => {
    setSelectedContent(content);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedContent(null);
  };

  return (
    <>
      <Head>
        <title>Content Library</title>
      </Head>
      <Grid.Container gap={4}>
        <Grid>
          <Card>
            <Grid>
              <Grid.Container gap={2} direction="column">
                <Grid>
                  <Text weight="bold" size="xl">
                    Explore Content
                  </Text>
                </Grid>
                <Grid>
                  <Input
                    label="Search by Type"
                    placeholder="Enter content type"
                    size="lg"
                    variant="outline"
                  />
                </Grid>
                <Grid>
                  <Button variant="primary" size="lg" fullWidth>
                    View All Content
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
        title="View Content Details"
        size="lg"
      >
        <Grid.Item>
          <Card>
            <Grid>
              <Grid.Container gap={2} direction="column">
                <Grid>
                  <Text weight="bold" size="xl">
                    {selectedContent?.name}
                  </Text>
                </Grid>
                <Grid>
                  <Text>
                    {selectedContent?.description}
                  </Text>
                </Grid>
                <Grid>
                  <Badge color="success">
                    {selectedContent?.status}
                  </Badge>
                </Grid>
              </Grid.Container>
            </Grid>
          </Card>
        </Grid.Item>
      </Modal>
      <Grid.Container gap={4}>
        {Content.map((content, index) => (
          <Grid key={index}>
            <Card
              onClick={() => handleSelectedContent(content)}
            >
              <Grid.Container gap={2}>
                <Grid.Item>
                  <Text weight="bold" size="xl">
                    {content.name}
                  </Text>
                </Grid.Item>
                <Grid.Item>
                  <Badge color="success">
                    {content.status}
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

export default ContentLibraryPage;