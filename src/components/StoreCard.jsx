import {
    Card,
    CardBody,
    Image,
    Stack,
    Heading,
    Text,
    Divider,
    CardFooter,
    ButtonGroup,
    Button
} from '@chakra-ui/react'
import { Ratings } from './Ratings'


const StoreCard = ({ name, img, description, types }) => {

    return (
        <Card maxW='sm' bg={'#2de2e6'} >
            <Text bg={'#9700cc'} align={'center'} fontSize={'large'} fontWeight={700}>
                {name}
            </Text>
            <Divider />
            <CardBody>
                <Image
                    src={img}
                    borderRadius='lg'
                />
                <Stack mt='6' spacing='3'>
                    <Heading size='md'></Heading>
                    <Text>
                        {description}
                    </Text>
                </Stack>
            </CardBody>
            <Divider />
            <CardFooter bg={'#f6019d'}>
                <Text>
                    {types}
                </Text>
            </CardFooter>
        </Card >
    )
}

export default StoreCard