import { Typography, Box, Button } from "@mui/material"
import { useGlobalContext } from "../context"
import Modal from '@mui/material/Modal'
import CloseIcon from '@mui/icons-material/Close'

const ModalComponent = () => {
    const { showModal, selectedMeal,handleClose } = useGlobalContext()

  

    return (
        <>
            <Modal
                open={showModal}
                aria-labelledby="modal-title"
                aria-describedby="modal-description"
            >
                <Box>
                    <Typography id="modal-title" >
                        {selectedMeal.strMeal}
                        <Button className="modal-close-btn" variant="contained" startIcon={<CloseIcon />} onClick={handleClose}>close</Button>
                    </Typography>
                    <Typography id="modal-description" sx={{ mt: 2 }}>
                        {selectedMeal.strInstructions}
                    </Typography>
                </Box>

            </Modal>
        </>
    )
}
export default ModalComponent