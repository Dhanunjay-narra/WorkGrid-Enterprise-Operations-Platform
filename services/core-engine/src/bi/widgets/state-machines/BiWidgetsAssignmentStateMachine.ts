export type BiWidgetsAssignmentState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class BiWidgetsAssignmentStateMachine {
  private allowedTransitions: Record<BiWidgetsAssignmentState, BiWidgetsAssignmentState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: BiWidgetsAssignmentState, to: BiWidgetsAssignmentState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: BiWidgetsAssignmentState, to: BiWidgetsAssignmentState): BiWidgetsAssignmentState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for BiWidgetsAssignment: " + from + " -> " + to);
    }
    return to;
  }
}
