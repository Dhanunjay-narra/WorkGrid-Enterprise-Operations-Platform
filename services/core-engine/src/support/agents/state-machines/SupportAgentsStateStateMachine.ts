export type SupportAgentsStateState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class SupportAgentsStateStateMachine {
  private allowedTransitions: Record<SupportAgentsStateState, SupportAgentsStateState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: SupportAgentsStateState, to: SupportAgentsStateState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: SupportAgentsStateState, to: SupportAgentsStateState): SupportAgentsStateState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for SupportAgentsState: " + from + " -> " + to);
    }
    return to;
  }
}
