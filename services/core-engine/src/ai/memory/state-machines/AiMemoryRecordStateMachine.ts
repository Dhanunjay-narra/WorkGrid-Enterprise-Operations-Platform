export type AiMemoryRecordState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class AiMemoryRecordStateMachine {
  private allowedTransitions: Record<AiMemoryRecordState, AiMemoryRecordState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: AiMemoryRecordState, to: AiMemoryRecordState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: AiMemoryRecordState, to: AiMemoryRecordState): AiMemoryRecordState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for AiMemoryRecord: " + from + " -> " + to);
    }
    return to;
  }
}
