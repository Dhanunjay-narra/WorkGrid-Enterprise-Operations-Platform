export type ProjectTasksRecordState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ProjectTasksRecordStateMachine {
  private allowedTransitions: Record<ProjectTasksRecordState, ProjectTasksRecordState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ProjectTasksRecordState, to: ProjectTasksRecordState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ProjectTasksRecordState, to: ProjectTasksRecordState): ProjectTasksRecordState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ProjectTasksRecord: " + from + " -> " + to);
    }
    return to;
  }
}
