export type ProjectCapacityAssignmentState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ProjectCapacityAssignmentStateMachine {
  private allowedTransitions: Record<ProjectCapacityAssignmentState, ProjectCapacityAssignmentState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ProjectCapacityAssignmentState, to: ProjectCapacityAssignmentState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ProjectCapacityAssignmentState, to: ProjectCapacityAssignmentState): ProjectCapacityAssignmentState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ProjectCapacityAssignment: " + from + " -> " + to);
    }
    return to;
  }
}
