export type BiCohortsPolicyState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class BiCohortsPolicyStateMachine {
  private allowedTransitions: Record<BiCohortsPolicyState, BiCohortsPolicyState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: BiCohortsPolicyState, to: BiCohortsPolicyState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: BiCohortsPolicyState, to: BiCohortsPolicyState): BiCohortsPolicyState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for BiCohortsPolicy: " + from + " -> " + to);
    }
    return to;
  }
}
