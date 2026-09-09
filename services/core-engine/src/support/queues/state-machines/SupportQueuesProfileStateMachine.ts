export type SupportQueuesProfileState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class SupportQueuesProfileStateMachine {
  private allowedTransitions: Record<SupportQueuesProfileState, SupportQueuesProfileState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: SupportQueuesProfileState, to: SupportQueuesProfileState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: SupportQueuesProfileState, to: SupportQueuesProfileState): SupportQueuesProfileState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for SupportQueuesProfile: " + from + " -> " + to);
    }
    return to;
  }
}
