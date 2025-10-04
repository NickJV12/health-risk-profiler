def validate_fields(answers):
    total = len(answers)
    missing = sum(1 for v in answers.values() if v is None)

    if missing / total > 0.5:
        return {"status": "incomplete", "reason": ">50% fields missing"}

    return {"status": "ok"}
