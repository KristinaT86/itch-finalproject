import { Avatar, Box, Flex, Text } from '@chakra-ui/react'

interface PostHeaderProps {
    username: string;
    avatar: string;
}
export default function PostHeader({ username, avatar }: PostHeaderProps) {
  return (
    <Flex justifyContent={"space-between"} alignItems={"center"} w={"full"} my={2}>
        <Flex alignItems={"center"} gap={2}>
            <Avatar src={avatar} size={"sm"} />
            <Flex fontSize={12} fontWeight={"bold"} gap="2">
                {username}
                <Box color={"gray.500"}>
                &#183; 1w
                </Box>
            </Flex>
        </Flex>
        <Box cursor={"pointer"}>
            <Text fontSize={12} color={"blue.500"} fontWeight={"bold"} _hover={{color:"blue"}} transition={"0.2s ease-in-out"}>Unfollow</Text>
        </Box>
    </Flex>
  )
}
