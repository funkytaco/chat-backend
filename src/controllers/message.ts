import Message from '../models/message';

const onGetMessages = async (req: any, res: any) => {
	try {
		const { roomCode } = req.body;
		const messages = Message.getMsgs(roomCode);
		console.log(messages);
		return res.status(200).json({
			status: 'success',
			data: { messages }
		});
	} catch (error) {
		console.log(error);
		return res.status(400).json({
			success: false,
			error: error.message
		});
	}
};

export default {
	onGetMessages
};
