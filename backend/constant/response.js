const success = (code, data) => {
    return { status: code, message: "SUCCESS", data: data };
};

const failed = (code, data) => {
    return { status: code, message: "FAILED", data: data };
};

module.exports={success, failed};