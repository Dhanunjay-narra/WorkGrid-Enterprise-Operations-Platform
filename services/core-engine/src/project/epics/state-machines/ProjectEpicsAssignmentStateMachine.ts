export type ProjectEpicsAssignmentState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ProjectEpicsAssignmentStateMachine {
  private allowedTransitions: Record<ProjectEpicsAssignmentState, ProjectEpicsAssignmentState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ProjectEpicsAssignmentState, to: ProjectEpicsAssignmentState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ProjectEpicsAssignmentState, to: ProjectEpicsAssignmentState): ProjectEpicsAssignmentState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ProjectEpicsAssignment: " + from + " -> " + to);
    }
    return to;
  }
}
