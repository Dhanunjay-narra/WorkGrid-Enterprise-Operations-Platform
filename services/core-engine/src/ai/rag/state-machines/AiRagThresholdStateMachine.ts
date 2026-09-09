export type AiRagThresholdState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class AiRagThresholdStateMachine {
  private allowedTransitions: Record<AiRagThresholdState, AiRagThresholdState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: AiRagThresholdState, to: AiRagThresholdState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: AiRagThresholdState, to: AiRagThresholdState): AiRagThresholdState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for AiRagThreshold: " + from + " -> " + to);
    }
    return to;
  }
}
