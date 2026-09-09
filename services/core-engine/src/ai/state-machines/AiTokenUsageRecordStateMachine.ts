export type AiTokenUsageRecordState = "DRAFT" | "PENDING_APPROVAL" | "ACTIVE" | "SUSPENDED" | "ARCHIVED";

export class AiTokenUsageRecordStateMachine {
  private validTransitions: Record<AiTokenUsageRecordState, AiTokenUsageRecordState[]> = {
    DRAFT: ["PENDING_APPROVAL", "ACTIVE", "ARCHIVED"],
    PENDING_APPROVAL: ["ACTIVE", "DRAFT", "ARCHIVED"],
    ACTIVE: ["SUSPENDED", "ARCHIVED"],
    SUSPENDED: ["ACTIVE", "ARCHIVED"],
    ARCHIVED: []
  };

  public canTransition(current: AiTokenUsageRecordState, next: AiTokenUsageRecordState): boolean {
    return this.validTransitions[current]?.includes(next) ?? false;
  }

  public transition(current: AiTokenUsageRecordState, next: AiTokenUsageRecordState): AiTokenUsageRecordState {
    if (!this.canTransition(current, next)) {
      throw new Error("Illegal state transition for AiTokenUsageRecord: from " + current + " to " + next);
    }
    return next;
  }
}
