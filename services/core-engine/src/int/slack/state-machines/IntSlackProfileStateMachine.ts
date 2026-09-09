export type IntSlackProfileState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IntSlackProfileStateMachine {
  private allowedTransitions: Record<IntSlackProfileState, IntSlackProfileState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IntSlackProfileState, to: IntSlackProfileState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IntSlackProfileState, to: IntSlackProfileState): IntSlackProfileState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IntSlackProfile: " + from + " -> " + to);
    }
    return to;
  }
}
