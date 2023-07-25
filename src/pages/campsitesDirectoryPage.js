import { Container, Row, Col } from 'reactstrap';
import CampsiteDetail from '../features/campsites/CampsiteDetail';
import SubHeader from '../components/SubHeader';
import CampsitesList from '../features/campsites/CampsitesList';
import { selectCampsiteById } from '../features/campsites/campsitesSlice';
import { useState } from 'react'; 

const CampsitesDirectoryPage = () => {
   const [campsiteId, setCampsiteId] = useState(0);
   const selectedCampsite = selectCampsiteById(campsiteId);

    return (
        <Container>
             <SubHeader current='Directory' />
            <Row>
                <Col sm='5' md='7'>
                    <CampsitesList setCampsiteId={setCampsiteId} />
                </Col>
                <Col>
                    <Col sm='7' md='5'>
                        <CampsiteDetail campsite={selectedCampsite} />
                    </Col>
                </Col>
            </Row>
        </Container>
    );
};

export default CampsitesDirectoryPage;
