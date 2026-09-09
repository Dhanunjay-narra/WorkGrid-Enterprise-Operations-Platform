export type ProjectTasksProfileState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ProjectTasksProfileStateMachine {
  private allowedTransitions: Record<ProjectTasksProfileState, ProjectTasksProfileState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ProjectTasksProfileState, to: ProjectTasksProfileState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ProjectTasksProfileState, to: ProjectTasksProfileState): ProjectTasksProfileState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ProjectTasksProfile: " + from + " -> " + to);
    }
    return to;
  }
}
