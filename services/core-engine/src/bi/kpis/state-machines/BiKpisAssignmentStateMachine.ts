export type BiKpisAssignmentState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class BiKpisAssignmentStateMachine {
  private allowedTransitions: Record<BiKpisAssignmentState, BiKpisAssignmentState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: BiKpisAssignmentState, to: BiKpisAssignmentState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: BiKpisAssignmentState, to: BiKpisAssignmentState): BiKpisAssignmentState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for BiKpisAssignment: " + from + " -> " + to);
    }
    return to;
  }
}
