export type SupportAgentsProfileState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class SupportAgentsProfileStateMachine {
  private allowedTransitions: Record<SupportAgentsProfileState, SupportAgentsProfileState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: SupportAgentsProfileState, to: SupportAgentsProfileState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: SupportAgentsProfileState, to: SupportAgentsProfileState): SupportAgentsProfileState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for SupportAgentsProfile: " + from + " -> " + to);
    }
    return to;
  }
}
