export type AiToolsThresholdState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class AiToolsThresholdStateMachine {
  private allowedTransitions: Record<AiToolsThresholdState, AiToolsThresholdState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: AiToolsThresholdState, to: AiToolsThresholdState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: AiToolsThresholdState, to: AiToolsThresholdState): AiToolsThresholdState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for AiToolsThreshold: " + from + " -> " + to);
    }
    return to;
  }
}
