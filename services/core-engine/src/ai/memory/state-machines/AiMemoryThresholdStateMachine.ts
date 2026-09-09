export type AiMemoryThresholdState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class AiMemoryThresholdStateMachine {
  private allowedTransitions: Record<AiMemoryThresholdState, AiMemoryThresholdState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: AiMemoryThresholdState, to: AiMemoryThresholdState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: AiMemoryThresholdState, to: AiMemoryThresholdState): AiMemoryThresholdState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for AiMemoryThreshold: " + from + " -> " + to);
    }
    return to;
  }
}
