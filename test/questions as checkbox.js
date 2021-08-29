<form action="#" className="w-full md:w-1/2 border p-6 questionForm">
<h2 className="text-2xl pb-3 font-semibold">
  Attack your enemy by answering correctly
</h2>
<p className="question">{fakeQuestion.question}</p>
<div>
  <div className="flex flex-col mb-3 answerChoices">
    <div className="answerDiv">
      <label className="checkboxLabel">
        {fakeQuestion.answers.answer_a}
        <input
          type="checkbox"
          className=" checkbox answerA"
          value="answer_a"
        />
        <span className="checkmark"></span>
      </label>
    </div>
    <div className="answerDiv">
      <label className="checkboxLabel">
        {fakeQuestion.answers.answer_b}
        <input
          type="checkbox"
          className="checkbox answerB"
          value="answer_b"
        />
        <span className="checkmark"></span>
      </label>
    </div>
    <div className="answerDiv">
      <label className="checkboxLabel">
        {fakeQuestion.answers.answer_c}
        <input
          type="checkbox"
          className="checkbox answerC"
          value="answer_c"
        />
        <span className="checkmark"></span>
      </label>
    </div>
    <div className="answerDiv">
      <label className="checkboxLabel">
        {fakeQuestion.answers.answer_d}
        <input
          type="checkbox"
          className="checkbox answerD"
          value="answer_d"
        />
        <span className="checkmark"></span>
      </label>
    </div>
    <div className="answerDiv">
      <label className="checkboxLabel">
        {fakeQuestion.answers.answer_e}
        <input
          type="checkbox"
          className="checkbox answere"
          value="answer_e"
        />
        <span className="checkmark"></span>
      </label>
    </div>
    <div className="answerDiv">
      <label className="checkboxLabel">
        {fakeQuestion.answers.answer_f}
        <input
          type="checkbox"
          className="checkbox answerf"
          value="answer_b"
        />
        <span className="checkmark"></span>
      </label>
    </div>
  </div>
  <div className="w-full pt-3 submitBtnDiv">
    <button
      type="submit"
      className="w-full px-4 py-2 transition duration-50 focus:outline-none font-semibold hover:text-white text-xl cursor-pointer submitBtn"
      onClick={getInputValues}
    >
      Submit
    </button>
  </div>
</div>
</form>
</>
);
};
