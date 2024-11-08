import { Flex, Box, Text, InputGroup, Input, InputRightElement, Button} from '@chakra-ui/react'
import { useState } from 'react'
import { CommentLogo, NotificationsLogo, UnlikeLogo } from '../../../utils/utils'

interface PostFooterProps {
    username: string;
}

export default function PostFooter({ username }: PostFooterProps) {
    const [liked, setLiked] = useState(false)
    const [likes, setLikes] = useState(0)
    const handleLike = () => {
        if (liked) {
            setLiked(false)
            setLikes(likes - 1)
        } else {
            setLiked(true)
            setLikes(likes + 1)
        }
    }
  return (
    <Box my={10}>
        <Flex alignItems={"center"} gap={4} w={"full"} pt={0} mb={2} mt={4}>
            <Box onClick={handleLike} cursor={"pointer"} fontSize={18}>
                {!liked ? (<NotificationsLogo />) : (<UnlikeLogo />)}
            </Box>
            <Box cursor={"pointer"} fontSize={18}>
             <CommentLogo />
            </Box>

        </Flex>
        <Text fontWeight={600} fontSize={"sm"}>
            {likes} likes
        </Text>
        <Text fontSize={"sm"} fontWeight={700}>
            {username}{" "}
            <Text as={"span"} fontWeight={400}>
                Feeling good
            </Text>
        </Text>
        <Text fontSize={"sm"} color={"gray.500"}>
            View all comments
        </Text>
        <Flex alignItems={"center"} gap={2} justifyContent={"space-between"} w={"full"}>
            <InputGroup>
            <Input variant={"flushed"} placeholder={"Add a comment..."}  fontSize={14}/>
            <InputRightElement>
                <Button fontSize={14} color={"blue.500"} fontWeight={600} cursor={"pointer"} _hover={{color: "white"}} bg={"transparent"}>
                    Post
                </Button>
            </InputRightElement>
            </InputGroup>
        </Flex>
        
    </Box>
  )
}
