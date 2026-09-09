export type ProjectSprintsTaskState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ProjectSprintsTaskStateMachine {
  private allowedTransitions: Record<ProjectSprintsTaskState, ProjectSprintsTaskState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ProjectSprintsTaskState, to: ProjectSprintsTaskState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ProjectSprintsTaskState, to: ProjectSprintsTaskState): ProjectSprintsTaskState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ProjectSprintsTask: " + from + " -> " + to);
    }
    return to;
  }
}
