export type ProjectSprintsAssignmentState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ProjectSprintsAssignmentStateMachine {
  private allowedTransitions: Record<ProjectSprintsAssignmentState, ProjectSprintsAssignmentState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ProjectSprintsAssignmentState, to: ProjectSprintsAssignmentState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ProjectSprintsAssignmentState, to: ProjectSprintsAssignmentState): ProjectSprintsAssignmentState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ProjectSprintsAssignment: " + from + " -> " + to);
    }
    return to;
  }
}
