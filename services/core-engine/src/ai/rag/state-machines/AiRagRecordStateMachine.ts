export type AiRagRecordState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class AiRagRecordStateMachine {
  private allowedTransitions: Record<AiRagRecordState, AiRagRecordState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: AiRagRecordState, to: AiRagRecordState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: AiRagRecordState, to: AiRagRecordState): AiRagRecordState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for AiRagRecord: " + from + " -> " + to);
    }
    return to;
  }
}
