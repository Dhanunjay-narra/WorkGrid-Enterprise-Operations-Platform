export type BiExportsAssignmentState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class BiExportsAssignmentStateMachine {
  private allowedTransitions: Record<BiExportsAssignmentState, BiExportsAssignmentState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: BiExportsAssignmentState, to: BiExportsAssignmentState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: BiExportsAssignmentState, to: BiExportsAssignmentState): BiExportsAssignmentState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for BiExportsAssignment: " + from + " -> " + to);
    }
    return to;
  }
}
