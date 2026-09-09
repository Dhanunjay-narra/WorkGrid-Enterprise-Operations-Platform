export type AiToolsConfigState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class AiToolsConfigStateMachine {
  private allowedTransitions: Record<AiToolsConfigState, AiToolsConfigState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: AiToolsConfigState, to: AiToolsConfigState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: AiToolsConfigState, to: AiToolsConfigState): AiToolsConfigState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for AiToolsConfig: " + from + " -> " + to);
    }
    return to;
  }
}
