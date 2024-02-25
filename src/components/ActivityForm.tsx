import {SubmitHandler, useForm} from "react-hook-form"
import { FormErrorMessage, FormLabel, FormControl, Input, Button, Select, 
    NumberInput,
    NumberInputField,
    RadioGroup,
    Stack,
    Radio,
    VStack,
    HStack
} from "@chakra-ui/react"

type ActivityFormInputs = {
    exercise: string,
    sets: number,
    reps: number,
    weight: number,
    units: string
}
const exerciseList = [
    {id: "sq", name: "Squat"},
    {id: "bench", name: "Bench Press"},
    {id: "sumo", name: "Sumo DL"},
    {id: "dl", name: "Conventional DL"}
];

export default function ActivityForm() {
    const {
        handleSubmit,
        formState: { errors, isSubmitting },
        register
    } = useForm<ActivityFormInputs>();

    const onSubmit: SubmitHandler<ActivityFormInputs> = async (data) => {
        console.log(data);
    }

    return (
        <>
            <div>Activity Form</div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <FormControl isRequired w="250px">
                    <FormLabel>Exercise</FormLabel>
                    <Select {...register("exercise")}>
                        { exerciseList.map((exc) => {
                                return <option key={exc.id} value={exc.id}>{exc.name}</option>
                            })
                        }
                    </Select>
                </FormControl>

                <HStack>
                    <FormControl isRequired w="75px">
                        <FormLabel># Sets</FormLabel>
                        <NumberInput defaultValue={1} min={1} max={20} > 
                            <NumberInputField {...register("sets")}/>
                        </NumberInput>
                    </FormControl>

                    <FormControl isRequired w="75px">
                        <FormLabel># Reps</FormLabel>
                        <NumberInput defaultValue={1} min={1} max={100} > 
                            <NumberInputField {...register("reps")}/>
                        </NumberInput>
                    </FormControl>
                </HStack>

                <HStack>
                    <FormControl isRequired w="125px">
                        <FormLabel>Weight</FormLabel>
                        <NumberInput defaultValue={1} min={1} max={10000} precision={1} step={1}> 
                            <NumberInputField {...register("weight")}/>
                        </NumberInput>
                    </FormControl>

                    <FormControl w="50px">
                        <FormLabel>Units</FormLabel>
                        <RadioGroup defaultValue="lbs">
                            <Stack direction='row'>
                                <Radio value="lbs" {...register("units")}>lbs</Radio>
                                <Radio value="kg" {...register("units")}>kg</Radio>
                            </Stack>
                        </RadioGroup>
                    </FormControl>
                </HStack>

                <Button isLoading={isSubmitting} type="submit">Save Activity</Button>
            </form>
        </>
    )
}