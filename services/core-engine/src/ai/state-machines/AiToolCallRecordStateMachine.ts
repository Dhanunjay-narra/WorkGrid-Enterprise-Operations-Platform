export type AiToolCallRecordState = "DRAFT" | "PENDING_APPROVAL" | "ACTIVE" | "SUSPENDED" | "ARCHIVED";

export class AiToolCallRecordStateMachine {
  private validTransitions: Record<AiToolCallRecordState, AiToolCallRecordState[]> = {
    DRAFT: ["PENDING_APPROVAL", "ACTIVE", "ARCHIVED"],
    PENDING_APPROVAL: ["ACTIVE", "DRAFT", "ARCHIVED"],
    ACTIVE: ["SUSPENDED", "ARCHIVED"],
    SUSPENDED: ["ACTIVE", "ARCHIVED"],
    ARCHIVED: []
  };

  public canTransition(current: AiToolCallRecordState, next: AiToolCallRecordState): boolean {
    return this.validTransitions[current]?.includes(next) ?? false;
  }

  public transition(current: AiToolCallRecordState, next: AiToolCallRecordState): AiToolCallRecordState {
    if (!this.canTransition(current, next)) {
      throw new Error("Illegal state transition for AiToolCallRecord: from " + current + " to " + next);
    }
    return next;
  }
}
