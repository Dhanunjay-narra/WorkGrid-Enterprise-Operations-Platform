export type AiToolsProfileState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class AiToolsProfileStateMachine {
  private allowedTransitions: Record<AiToolsProfileState, AiToolsProfileState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: AiToolsProfileState, to: AiToolsProfileState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: AiToolsProfileState, to: AiToolsProfileState): AiToolsProfileState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for AiToolsProfile: " + from + " -> " + to);
    }
    return to;
  }
}
